// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Wiki {
    struct Article {
        string title;
        string contentHash; // IPFS hash of the article content
        address author;
        uint256 timestamp;
        uint256 version;
        bool isDeleted;
    }

    mapping(uint256 => Article) public articles;
    uint256 public articleCount;
    mapping(bytes32 => uint256) public titleToId;
    mapping(address => uint256[]) public authorArticles;

    event ArticleAdded(uint256 indexed id, string title, string contentHash, address indexed author, uint256 timestamp, uint256 version);
    event ArticleUpdated(uint256 indexed id, string title, string contentHash, address indexed editor, uint256 timestamp, uint256 version);
    event ArticleDeleted(uint256 indexed id, address indexed deleter, uint256 timestamp);

    function addArticle(string memory _title, string memory _contentHash) public {
        require(bytes(_title).length > 0, "Title cannot be empty");
        require(bytes(_contentHash).length > 0, "Content hash cannot be empty");
        bytes32 titleHash = keccak256(bytes(_title));
        require(titleToId[titleHash] == 0, "Article with this title already exists");

        articleCount++;
        articles[articleCount] = Article({
            title: _title,
            contentHash: _contentHash,
            author: msg.sender,
            timestamp: block.timestamp,
            version: 1,
            isDeleted: false
        });

        titleToId[titleHash] = articleCount;
        authorArticles[msg.sender].push(articleCount);

        emit ArticleAdded(articleCount, _title, _contentHash, msg.sender, block.timestamp, 1);
    }

    function updateArticle(uint256 _id, string memory _newContentHash) public {
        require(_id > 0 && _id <= articleCount, "Invalid article ID");
        Article storage article = articles[_id];
        require(!article.isDeleted, "Article has been deleted");
        require(msg.sender == article.author, "Only the author can update the article");

        article.contentHash = _newContentHash;
        article.timestamp = block.timestamp;
        article.version++;

        emit ArticleUpdated(_id, article.title, _newContentHash, msg.sender, block.timestamp, article.version);
    }

    function deleteArticle(uint256 _id) public {
        require(_id > 0 && _id <= articleCount, "Invalid article ID");
        Article storage article = articles[_id];
        require(!article.isDeleted, "Article has already been deleted");
        require(msg.sender == article.author, "Only the author can delete the article");

        article.isDeleted = true;
        bytes32 titleHash = keccak256(bytes(article.title));
        delete titleToId[titleHash];

        emit ArticleDeleted(_id, msg.sender, block.timestamp);
    }

    function getArticle(uint256 _id) public view returns (string memory, string memory, address, uint256, uint256, bool) {
        require(_id > 0 && _id <= articleCount, "Invalid article ID");
        Article memory article = articles[_id];
        return (article.title, article.contentHash, article.author, article.timestamp, article.version, article.isDeleted);
    }

    function getArticleByTitle(string memory _title) public view returns (uint256, string memory, string memory, address, uint256, uint256, bool) {
        bytes32 titleHash = keccak256(bytes(_title));
        uint256 id = titleToId[titleHash];
        require(id != 0, "Article not found");
        Article memory article = articles[id];
        return (id, article.title, article.contentHash, article.author, article.timestamp, article.version, article.isDeleted);
    }

    function getAuthorArticles(address _author) public view returns (uint256[] memory) {
        return authorArticles[_author];
    }

    function getArticlesCount() public view returns (uint256) {
        return articleCount;
    }
}