import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

export const useGetSinglePhotos = id => {
  const { loading, data, error } = useQuery(query, { variables: { id } } );
  return { loading, data, error }
}