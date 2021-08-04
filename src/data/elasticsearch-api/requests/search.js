import client from '../network';


function parseResponse(response) {

  if (response.status !== 200) {
    return [];
  }

  return response['data']['hits']['hits'];
}

export async function getESResultsForQuery(query, fields) {

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
      'Authorization' : 'ApiKey ELASTIC_SEARCH_API_KEY',
    }
  });

  let data = parseResponse(response);

  console.log(data);
  return data;
}
