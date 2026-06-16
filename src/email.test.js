import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { extractEmails, isValidEmail, getValidEmails, getInvalidEmails } from './email.js';

describe('extractEmails', () => {
  it('returns emails from member objects', () => {
    const members = [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@test.org' },
    ];
    assert.deepEqual(extractEmails(members), ['alice@example.com', 'bob@test.org']);
  });

  it('returns empty array for non-array input', () => {
    assert.deepEqual(extractEmails(null), []);
    assert.deepEqual(extractEmails('not an array'), []);
  });
});

describe('isValidEmail', () => {
  it('accepts valid email formats', () => {
    assert.equal(isValidEmail('user@example.com'), true);
    assert.equal(isValidEmail('a.b@c.co'), true);
  });

  it('rejects invalid email formats', () => {
    assert.equal(isValidEmail('invalid'), false);
    assert.equal(isValidEmail('missing@domain'), false);
    assert.equal(isValidEmail(null), false);
  });
});

describe('getValidEmails', () => {
  it('returns only valid emails from members', () => {
    const members = [
      { email: 'good@example.com' },
      { email: 'bad-email' },
      { email: 'also@valid.org' },
    ];
    assert.deepEqual(getValidEmails(members), ['good@example.com', 'also@valid.org']);
  });

  it('returns empty array for non-array input', () => {
    assert.deepEqual(getValidEmails(undefined), []);
  });
});

describe('getInvalidEmails', () => {
  it('returns only invalid emails from members', () => {
    const members = [
      { email: 'good@example.com' },
      { email: 'bad-email' },
      { email: 'also@valid.org' },
      { email: 'not-an-email' },
    ];
    assert.deepEqual(getInvalidEmails(members), ['bad-email', 'not-an-email']);
  });

  it('returns empty array for non-array input', () => {
    assert.deepEqual(getInvalidEmails(null), []);
  });
});
