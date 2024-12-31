import {
  ArticleAdded as ArticleAddedEvent,
  ArticleUpdated as ArticleUpdatedEvent,
  ArticleDeleted as ArticleDeletedEvent
} from "../generated/Contract/Contract"
import {
  ArticleAdded,
  ArticleUpdated,
  ArticleDeleted
} from "../generated/schema"

export function handleArticleAdded(event: ArticleAddedEvent): void {
  let entity = new ArticleAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Contract_id = event.params.id
  entity.title = event.params.title
  entity.contentHash = event.params.contentHash
  entity.author = event.params.author
  entity.timestamp = event.params.timestamp
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleArticleUpdated(event: ArticleUpdatedEvent): void {
  let entity = new ArticleUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Contract_id = event.params.id
  entity.title = event.params.title
  entity.contentHash = event.params.contentHash
  entity.editor = event.params.editor
  entity.timestamp = event.params.timestamp
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleArticleDeleted(event: ArticleDeletedEvent): void {
  let entity = new ArticleDeleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Contract_id = event.params.id
  entity.deleter = event.params.deleter
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
