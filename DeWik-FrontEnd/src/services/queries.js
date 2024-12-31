// src/services/queries.js

export const ARTICLE_ADDED = `
query ArticleAdded($id: ID!) {
    articleAdded(id: $id) {
        id
        title
        contentHash
    }
}`;

export const ARTICLE_ADDEDS = `
query ArticleAddeds($skip: Int, $first: Int) {
    articleAddeds(skip: $skip, first: $first) {
        id
        title
        contentHash
    }
}`;

export const ARTICLE_UPDATED = `
query ArticleUpdated($id: ID!) {
    articleUpdated(id: $id) {
        id
        title
        content
    }
}`;

export const ARTICLE_UPDATEDS = `
query ArticleUpdateds($skip: Int, $first: Int) {
    articleUpdateds(skip: $skip, first: $first) {
        id
        title
        content
    }
}`;

export const ARTICLE_DELETED = `
query ArticleDeleted($id: ID!) {
    articleDeleted(id: $id) {
        id
    }
}`;

export const ARTICLE_DELETEDS = `
query ArticleDeleteds($skip: Int, $first: Int) {
    articleDeleteds(skip: $skip, first: $first) {
        id
    }
}`;
