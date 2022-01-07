const axios = require('axios')
const { data } = require('jquery')
const { myToken } = require('./token')
/**
 * joel
 * 위도, 경도를 주소로 바꿔주는 함수
 * @param {number} lat 
 * @param {number} lng 
 * @param {string} token
 * @returns {string}
 */

async function reverseGeocoding(lat, lng, token) {
    return await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lat},${lng}.json?access_token=${token}`)
}

/**
 * array<object> 형식의 json을 읽어서 
 * geometry에 주소가 없으면 주소를 추가한다 
 * 모든 array 원소에 대하여 처리가 완료되면 callback을 실행한다 
 * @param {*} obj 
 * @param {*} callback 
 */
async function addJsonAddress(obj, callback) {
    Promise.all(obj.map(async (ea) => {
        if (ea.geometry.address) return ea

        const coor = ea.geometry.coordinates
        let resultAddr = ''
        await reverseGeocoding(coor[0], coor[1], accessToken).then((res) => {
            resultAddr = res.data.features[1].place_name
            ea.geometry = { ...ea.geometry, address: resultAddr }
        })

        return ea
    })).then(()=>{
        callback()
    })
}

const accessToken = myToken

module.exports = addJsonAddress