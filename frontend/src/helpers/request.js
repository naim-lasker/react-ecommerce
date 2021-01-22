import axios from "axios"

let defaultOptions
const client = (token = null) => {

    return {

        get: (url, tokenNeed, token, options = {}) => {
            defaultOptions = {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',

                },
            }
            if (tokenNeed) {
                Object.assign(defaultOptions.headers, { Authorization: 'Bearer ' + token })

            }
            return axios.get(url, { ...defaultOptions, ...options })
        },

        post: (url, tokenNeed, token, data, options = {}) => {
            defaultOptions = {
                headers: {
                    "Accept": 'application/json',
                    'Content-Type': 'application/json',

                },
            }
            if (tokenNeed) {
                defaultOptions.headers['Authorization'] = 'Bearer ' + token



            }
            console.log("defaultOptions", defaultOptions)
            return axios.post(url, data, { defaultOptions, ...options })

        },

        put: (url, tokenNeed, token, data, options = {}) => {
            defaultOptions = {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',

                },
            }
            if (tokenNeed) {
                Object.assign(defaultOptions.headers, { Authorization: 'Bearer ' + token })

            }
            return axios.put(url, data, { ...defaultOptions, ...options })
        },

        patch: (url, tokenNeed, token, data, options = {}) => {
            defaultOptions = {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',

                },
            }
            if (tokenNeed) {
                Object.assign(defaultOptions.headers, { Authorization: 'Bearer ' + token })

            }


            return axios.patch(url, data, { ...defaultOptions, ...options })
        },
        
        delete: (url, tokenNeed, token, options = {}) => {
            defaultOptions = {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',

                },
            }
            if (tokenNeed) {
                Object.assign(defaultOptions.headers, { Authorization: 'Bearer ' + token })

            }

            return axios.delete(url, { ...defaultOptions, ...options })
        },
    }
}


const httpRequest = client(null)


export default httpRequest