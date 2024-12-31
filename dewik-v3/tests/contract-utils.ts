import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ArticleAdded,
  ArticleUpdated,
  ArticleDeleted
} from "../generated/Contract/Contract"

export function createArticleAddedEvent(
  id: BigInt,
  title: string,
  contentHash: string,
  author: Address,
  timestamp: BigInt,
  version: BigInt
): ArticleAdded {
  let articleAddedEvent = changetype<ArticleAdded>(newMockEvent())

  articleAddedEvent.parameters = new Array()

  articleAddedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  articleAddedEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  articleAddedEvent.parameters.push(
    new ethereum.EventParam(
      "contentHash",
      ethereum.Value.fromString(contentHash)
    )
  )
  articleAddedEvent.parameters.push(
    new ethereum.EventParam("author", ethereum.Value.fromAddress(author))
  )
  articleAddedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  articleAddedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(version)
    )
  )

  return articleAddedEvent
}

export function createArticleUpdatedEvent(
  id: BigInt,
  title: string,
  contentHash: string,
  editor: Address,
  timestamp: BigInt,
  version: BigInt
): ArticleUpdated {
  let articleUpdatedEvent = changetype<ArticleUpdated>(newMockEvent())

  articleUpdatedEvent.parameters = new Array()

  articleUpdatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  articleUpdatedEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  articleUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "contentHash",
      ethereum.Value.fromString(contentHash)
    )
  )
  articleUpdatedEvent.parameters.push(
    new ethereum.EventParam("editor", ethereum.Value.fromAddress(editor))
  )
  articleUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  articleUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(version)
    )
  )

  return articleUpdatedEvent
}

export function createArticleDeletedEvent(
  id: BigInt,
  deleter: Address,
  timestamp: BigInt
): ArticleDeleted {
  let articleDeletedEvent = changetype<ArticleDeleted>(newMockEvent())

  articleDeletedEvent.parameters = new Array()

  articleDeletedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  articleDeletedEvent.parameters.push(
    new ethereum.EventParam("deleter", ethereum.Value.fromAddress(deleter))
  )
  articleDeletedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return articleDeletedEvent
}
