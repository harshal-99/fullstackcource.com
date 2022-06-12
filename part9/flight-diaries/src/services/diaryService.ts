import diaries                              from '../../data/diaries'
import {DiaryEntry, NonSensitiveDiaryEntry} from "../types";


export const getEntries = (): Array<DiaryEntry> => {
  return diaries
}

export const addDiary = () => {
  return null
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
