import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default function useUsers() {

  const router = useRouter()

  const isAuthenticated = ref(false)

  let logIn = async () => {
    try {
      localStorage.setItem('user', 'admin')
      isAuthenticated.value = true
      console.log("user logged in")
    }
    catch(err)
    {
      console.log(err)
    }
  }

  let logOut = async () => {
    try {
      localStorage.removeItem('user')
      isAuthenticated.value = false
      console.log("user logged out")
      router.push('/login')
    }
    catch(err)
    {
      console.log(err)
    }
  }

  return {
    logIn,
    logOut,
    isAuthenticated
  }

}