import shortId from 'shortid';

/**
 * @function generateUniqueKey()
 *
 * @desc
 *
 * Why the use of shortId to generate collection keys?
 *
 * Short answer: Index as key is an anti-pattern.
 *
 * `key` is required prop when iterating over a collection of elements, because
 * it helps React to identify and reconcile (read and update) the differences between the virtual
 * and real DOM. Since index is not unique it can cause re-render issues when the collection changes.
 * With that said there is some cases when you can use `index` as `key`, such as when the
 * the collection will not change.
 *
 * Source: https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
 *
 * @return {string} unique, non-sequential id
 *
 *  Example:
 *  <ul>
 *    list.map(item => <li key={generateUniqueKey()}>item</li>)
 *  </ul>
 * */
export const generateUniqueKey = (): string => shortId.generate();