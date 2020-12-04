import { compact } from "lodash"

export function parseWordList(wordList: string) {
  return compact(wordList.split(",").map((word) => word.trim()))
}
