import singleProducts from "../src/jsFiles/singleProduct";


test('should', () => {
  expect(singleProducts.sum(1, 2)).toBe(3);
  expect(singleProducts.sum(10, 2)).toBe(12);
  expect(singleProducts.sum(100, -100)).toBe(0);
  expect(singleProducts.sum(0, 0)).toBe(0);
  expect(singleProducts.sum(1000, 35)).toBe(1035);

})
