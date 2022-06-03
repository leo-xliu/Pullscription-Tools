
function searchFanProfile(arr, firstname, lastname) {

    console.log("arr: "+arr)
    console.log("firstname: "+firstname)
    console.log("lastname: "+lastname)
    return arr.filter((item) => (item.firstname === firstname && item.lastname === lastname))
    
  }

export default searchFanProfile
