import { gql } from '@apollo/client'

// type LocationsInput = {
//   value: String;
// }

// type JobsInput = {
//   type: String;
//   slug: String;
// }


export const ALL_JOBS = gql`
  query{
    jobs{
      title
      applyUrl
      locationNames
      company{
        name
      }
      tags(first: 3){
        name
      }
    }
  }
`

export const JOBS_CITIES = gql`
  query jobs($where:String){
    countries{
    	cities(where:{name_contains:$where}){
        name
        jobs{
          title
          company{
            name
          }
          tags(first:3){
            name
          }
        }
      }
    }
  }
`