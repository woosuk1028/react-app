import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://seok2.duckdns.org/graphql',
    cache: new InMemoryCache(),
});

export const fetchCreateData = async (title, contents, lat, lng) => {
    const { data } = await client.mutate({
        mutation: gql`
            mutation Create($title: String!, $contents: String!, $lat: String!, $lng: String!) {
                create(title: $title, contents: $contents, lat: $lat, lng: $lng)
            }
        `,
        variables: {
            title,
            contents,
            lat: lat.toString(),
            lng: lng.toString(),
        }
    });

    return data;
}