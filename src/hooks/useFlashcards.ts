import { useState, useEffect } from 'react'
import { UseFlashcards } from 'typings/useFlashcards.d'

const useFlashCards = (): UseFlashcards => {
  const [flashCards, setFlashCards] = useState([])
  const [fileName, setFileName] = useState('')

  useEffect(() => {
    if (fileName && fileName.length > 0) {
      const storage = localStorage.getItem(fileName)
      setFlashCards(storage ? JSON.parse(storage) : [])
    } else {
      setFlashCards([])
    }
  }, [fileName])

  return {
    flashCards,
    setFileName,
  }
}

export default useFlashCards
