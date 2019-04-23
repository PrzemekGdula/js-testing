test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test('null', () => {
  const z = null
  expect(z).toBeNull()
  expect(z).toBeDefined()
  expect(z).toBeFalsy()
  expect(z).toBe(null)
})


//--------------
// Async operations in testing

const fakeData = {
  results: [
    {
      name: {
        first: 'Przemek',
        last: 'Gdula'
      }
    }
  ]
}

const fakeFetch = () => {
  return new Promise((resolve, reject) => {
    resolve({
      json: () => fakeData
    })
  })
}

const getRandomName = (fetch) => {
  return fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then(data => `${data.results[0].name.first} ${data.results[0].name.last}`)
}

describe('Using user API', () => {
  test('expect name to be mine', () => {
    return expect(getRandomName(fakeFetch)).resolves.toBe('Przemek Gdula')
  })
})
Date.now = jest.fn(() => new Date(1482363367071));

describe('Objects with snapshots', () => {
  const userSnapshot = {
    stydying: false,
    name: expect.any(String),
    surname: expect.any(String),
    newProperty: expect.any(Boolean)
  };

  test('Testing snapshot parameter matchers', () => {
    const fetchedUser = {
      name: 'Przemek',
      surname: 'Gdula',
      newProperty: true,
      stydying: false
    }
    return expect(fetchedUser).toMatchSnapshot(userSnapshot)
  })
})
