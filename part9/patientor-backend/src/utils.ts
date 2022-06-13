import {Gender} from "./types";

type Fields = {
  name: unknown,
  dateOfBirth: unknown,
  ssn: unknown,
  gender: unknown,
  occupation: unknown
  entries: unknown
}

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String
}

const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw  new Error('Incorrect or missing name')
  }
  return name
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error('Incorrect or missing date: ' + date)
  }
  return date
}

const parseSSN = (ssn: unknown): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error('Incorrect or missing ssn: ' + ssn)
  }
  return ssn
}

const isGender = (gender: any): gender is Gender => {
  return Object.values(Gender).includes(gender)
}

const parseGender = (gender: unknown): string => {
  if (!gender || !isGender(gender)) {
    throw new Error('Incorrect or missing gender: ' + gender)
  }
  return gender
}

const parseOccupation = (occupation: unknown): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error('Incorrect or missing occupation: ' + occupation)
  }
  return occupation
}

const parseEntries = (entry: unknown): string[] => {
  if (!Array.isArray(entry)) {
    throw new Error('Incorrect or missing entries: ' + entry)
  }
  if (!entry.every(ent => isString(ent))) {
    throw new Error('Incorrect or missing entries: ' + entry)
  }
  return entry
}

export const toNewPatientEntry = ({name, dateOfBirth, ssn, gender, occupation, entries}: Fields) => {
  return {
    name: parseName(name),
    dateOfBirth: parseDate(dateOfBirth),
    ssn: parseSSN(ssn),
    gender: parseGender(gender),
    occupation: parseOccupation(occupation),
    entries: parseEntries(entries)
  }
}
