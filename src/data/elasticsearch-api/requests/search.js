import client from '../network';


function parseResponse(response) {

  console.log("------");
  console.log(response['data'])
  console.log("------");

  if (response.status !== 200) {
    return [];
  }

  let data = response['data']['hits']['hits'];

  for (let i = 0; i < data.length; i++) {
    let link = data[i]['_source']['link'];

    if (!link.startsWith('http')) {
      link = 'https://' + link;
      data[i]['_source']['link'] = link;
    }
  }

  return data;
}

export async function getESResultsForQuery(query, fields) {

  console.log(fields);

  let body = {
    "query": {
      "bool": {
        "should": [
          { "match": { "title"       : query } },
          { "match": { "description" : query } },
        ],
        "filter" : {
          "bool": {
            "should": [
              { "term": { "status" : "successful" } },
              { "term": { "status" : "completed" } },
              { "term": { "status" : "certified" } },
            ]
          }
        },
      }
    }
  };

  if (fields['country'] === 'all') {

  }

  if (fields['innovation'] === 'all') {

  }

  if (fields['bcorp'] === true) {
   body['query']['bool']['must'] =  [
      { "prefix": { "id"        : "b_corp" } },
    ];
  }
  console.log("--***--");
  console.log(body);

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
