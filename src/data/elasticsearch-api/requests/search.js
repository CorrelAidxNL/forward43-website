import client from '../network';


function parseResponse(response) {

  console.log("------");
  console.log(response['data'])
  console.log("------");

  if (response.status !== 200) {
    return [];
  }

  return response['data']['hits']['hits'];
}

export async function getESResultsForQuery(query, fields) {

  if (fields['country'] === 'all') {

  }

  if (fields['innovation'] === 'all') {

  }

  let body = {
    "query": {
      "bool": {
        "should": [
          { "match": { "title"       : query } },
          { "match": { "description" : query } }
        ]
      }
    }
  };

  const response = await client.post('', body, {
    headers: {
      'Content-Type'  : 'application/json',
      'Authorization' : 'ApiKey Zkk3YzZua0JnNF9fT3duV3dGT1I6WDVXakFuSkxRaG10Q2RYOWp2RlNGUQ==',
    }
  });

  let data = parseResponse(response);

  console.log(data);
  return data;
}
