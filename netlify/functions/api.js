exports.handler = async () => {
  const data = JSON.stringify({
    transactions: [
      {
        date: "8/12/23",
        amount: 225.55,
      },
      {
        date: "8/13/23",
        amount: 8335.01,
      },
      {
        date: "8/13/23",
        amount: 100.25,
      },
      {
        date: "8/14/23",
        amount: 127.05,
      },
      {
        date: "8/15/23",
        amount: 143.02,
      },
      {
        date: "8/15/23",
        amount: 77.32,
      },
      {
        date: "8/25/23",
        amount: 5.01,
      },
      {
        date: "8/25/23",
        amount: 115.01,
      },
      {
        date: "8/27/23",
        amount: 125.55,
      },
      {
        date: "8/28/23",
        amount: 875.01,
      },
      {
        date: "8/29/23",
        amount: 10.25,
      },
      {
        date: "8/29/23",
        amount: 197.05,
      },
      {
        date: "8/30/23",
        amount: 143.02,
      },
      {
        date: "8/30/23",
        amount: 2777.32,
      },
      {
        date: "8/31/23",
        amount: 45.01,
      },
      {
        date: "8/31/23",
        amount: 153.01,
      },
      {
        date: "9/3/23",
        amount: 120.0,
      },
      {
        date: "9/4/23",
        amount: 665.55,
      },
      {
        date: "9/5/23",
        amount: 11.01,
      },
      {
        date: "9/5/23",
        amount: 1044.25,
      },
      {
        date: "9/6/23",
        amount: 1876.05,
      },
      {
        date: "9/6/23",
        amount: 1900.02,
      },
      {
        date: "9/18/23",
        amount: 169.0,
      },
      {
        date: "9/19/23",
        amount: 665.55,
      },
      {
        date: "9/23/23",
        amount: 11.01,
      },
      {
        date: "9/23/23",
        amount: 1220.25,
      },
      {
        date: "9/25/23",
        amount: 17.05,
      },
      {
        date: "9/25/23",
        amount: 176.02,
      },
      {
        date: "9/27/23",
        amount: 1342.0,
      },
      {
        date: "9/28/23",
        amount: 665.55,
      },
      {
        date: "9/28/23",
        amount: 12.01,
      },
      {
        date: "9/30/23",
        amount: 1460.25,
      },
      {
        date: "9/30/23",
        amount: 1001.05,
      },
      {
        date: "9/30/23",
        amount: 2223.02,
      },
      {
        date: "10/3/23",
        amount: 2007.32,
      },
      {
        date: "10/3/23",
        amount: 500.01,
      },
      {
        date: "10/10/23",
        amount: 205.01,
      },
      {
        date: "10/13/23",
        amount: 100.0,
      },
      {
        date: "10/20/23",
        amount: 211.32,
      },
      {
        date: "10/22/23",
        amount: 115.01,
      },
      {
        date: "10/22/23",
        amount: 1315.01,
      },
      {
        date: "10/25/23",
        amount: 12.0,
      },
      {
        date: "10/27/23",
        amount: 7.32,
      },
      {
        date: "10/28/23",
        amount: 95.01,
      },
      {
        date: "10/30/23",
        amount: 15.01,
      },
      {
        date: "10/30/23",
        amount: 1.0,
      },
      {
        date: "10/31/23",
        amount: 37.32,
      },
      {
        date: "10/31/23",
        amount: 522.01,
      },
      {
        date: "10/31/23",
        amount: 135.01,
      },
    ],
  });

  return {
    statusCode: 200,
    body: data,
  };
};
