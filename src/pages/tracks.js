import React from "react";
import { Layout } from "../components";
import { useQuery, gql } from "@apollo/client";
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";

const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      author {
        name
        photo
        id
      }
      thumbnail
      modulesCount
      length
    }
  }
`;
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  // if (loading) return "Loading...";

  // if (error) return `ERROR! ${error.message}`;

  return (
    <Layout grid>
      {/* {JSON.stringify(data)} */}
      {/* ? .... check if true */}
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
