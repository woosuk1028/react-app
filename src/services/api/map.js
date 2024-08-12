import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://seok2.duckdns.org/graphql',
    cache: new InMemoryCache(),
});

export const fetchMapData = async () => {
    const { data } = await client.query({
        query: gql`
            {
                maps {
                    seq
                    title
                    contents
                    lat
                    lng
                    star
                    create_date
                }
            }`
    });

    return data.maps;
}