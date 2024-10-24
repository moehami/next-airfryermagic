import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const {
    data: comments,
    isLoading,
    isError: error,
  } = useSWR(
    "https://jsonplaceholder.typicode.com/comments?_limit=6",
    fetcher,
    { revalidateOnFocus: false, revalidateOnReconnect: false }
  );

  if (error) {
    return <p>Failed to fetch</p>;
  }

  if (isLoading) {
    return <p>Loading comments...</p>;
  }

  return (
       <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              {comment.name}
            </li>
          ))}
        </ul>
