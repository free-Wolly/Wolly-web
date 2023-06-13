import { gql } from "graphql-request";

const blogsQuery = gql`
  query Blogs($filters: BlogFiltersInput, $pagination: PaginationArg) {
    blogs(pagination: $pagination, filters: $filters, locale: "ka") {
      data {
        id
        attributes {
          createdAt
          updatedAt
          publishedAt
          content
          cover {
            data {
              id
              attributes {
                url
              }
            }
          }
          title
          slug
          author {
            data {
              attributes {
                fullName
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          categories {
            data {
              attributes {
                name
                textColor
              }
            }
          }
          tags {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
    }
  }
`;

export default blogsQuery;
