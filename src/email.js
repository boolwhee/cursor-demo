import { isValidEmail } from './validator.js';

export { isValidEmail };

/**
 * 사용자 배열에서 email 필드를 추출한다.
 * @param {Array<{ email?: string }>} users - 사용자 객체 배열
 * @returns {string[]} 추출된 이메일 배열
 */
export function extractEmails(users) {
  if (!Array.isArray(users)) {
    return [];
  }
  return users.map((user) => user.email);
}

/**
 * 유효한 이메일만 필터링한다.
 * @param {Array<{ email?: string }>} users - 사용자 객체 배열
 * @returns {string[]} 유효한 이메일 배열
 */
export function getValidEmails(users) {
  return extractEmails(users).filter(isValidEmail);
}

/**
 * 유효하지 않은 이메일만 필터링한다.
 * @param {Array<{ email?: string }>} users - 사용자 객체 배열
 * @returns {string[]} 유효하지 않은 이메일 배열
 */
export function getInvalidEmails(users) {
  return extractEmails(users).filter((email) => !isValidEmail(email));
}

/**
 * 유효한 이메일 중복을 제거한다.
 * @param {Array<{ email?: string }>} users - 사용자 객체 배열
 * @returns {string[]} 중복 제거된 유효 이메일 배열
 */
export function uniqueValidEmails(users) {
  return [...new Set(getValidEmails(users))];
}
