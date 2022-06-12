import diaries                                             from '../../data/diaries'
import {DiaryEntry, NewDiaryEntry, NonSensitiveDiaryEntry} from "../types";


export const getEntries = (): Array<DiaryEntry> => {
  return diaries
}

export const addDiary = (entry: NewDiaryEntry): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...entry
  }

  diaries.push(newDiaryEntry)
  return newDiaryEntry
}

export const getNonSensitiveEntries =
  (): NonSensitiveDiaryEntry[] => {
    return diaries
      .map(
        ({id, date, weather, visibility}) => ({
          id,
          date,
          weather,
          visibility
        }))
  }

export const findById = (id: number): DiaryEntry | undefined => {
  return diaries.find(d => d.id === id)
}
