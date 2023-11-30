'use client';
import useSWR from 'swr';
const Dashboard = () => {
  const fetcher = () =>
    fetch(
      'http://3.34.3.172:8090/photoism/v1/admin/payment/find/top-up?size=10&page=1&sort=desc',
      {
        method: 'GET',
        headers: {
          Authorization:
            'Bearer eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJleHAiOjE3MDA3MTUwMDcsImlhdCI6MTcwMDI4MzAwNywianRpIjoiYTkwNDhmZjUtZWNhMi00NWUxLTgyZjctMWExMTdmN2IxNGQ2IiwiaXNzIjoiREZJTEUiLCJhdWQiOiJERklMRSIsInN1YiI6ImFkbWluMTIzQGdtYWlsLmNvbSJ9.zzjekQYb4QwTK8Wfk2UQgfmwYwYazJGnY6mgb-o1pbw'
        }
      }
    ).then((res) => res.json());
  const { data, error } = useSWR(
    'http://3.34.3.172:8090/photoism/v1/admin/payment/find/top-up?size=10&page=1&sort=desc',
    fetcher
  );
  console.log('data 12', data);
  return <>Peter me gege</>;
};
export default Dashboard;
