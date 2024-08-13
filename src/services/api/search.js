import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://seok2.duckdns.org/graphql',
    cache: new InMemoryCache(),
});

export const fetchSearchData = async (title) => {
    const { data } = await client.query({
        query: gql`
            query($title: String!) {
                search(title: $title) {
                    seq
                    title
                    contents
                    lat
                    lng
                    star
                    create_date
                }
            }
        `,
        variables: { title },
    });

    console.log(data.search);
    return data.search;
}