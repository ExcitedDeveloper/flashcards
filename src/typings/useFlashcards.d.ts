import { NullableString } from './global.d'

type SetFileNameType = (fileName: string) => void

export interface UseFlashcards {
  flashCards: Flashcard[]
  setFileName: SetFileNameType
}

export interface Flashcard {
  question: string
  answer: string
  score: NullableString
  history: NullableString
}
