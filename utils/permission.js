import * as ImagePicker from 'expo-image-picker'
import { Alert } from 'react-native'

// export const loadImageFromGallery = async (array) => {
//     const response = { status: false, image: null }
//     const resultPermissions = await Permissions.askAsync(Permissions.CAMERA)
//     if (resultPermissions.status === "denied") {
//         Alert.alert("Debes de darle permiso para acceder a las imágenes del teléfono.")
//         return response
//     }
//     const result = await ImagePicker.launchImageLibraryAsync({
//         allowsEditing: true,
//         aspect: array
//     })
//     if (result.cancelled) {
//         return response
//     }
//     response.status = true
//     response.image = result.uri
//     return response
// }

const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (status !== 'granted') {
        Alert.alert(
            'Debes de darle permiso para acceder a las imágenes del teléfono.',
            [{ text: 'Ok' }],
        )
        return false;
    }
    return true;
}

export const loadImageFromGallery = async (array) => {
    const isCameraOk = await verifyPermissions();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: array,
        quality: 0.8,
    })
    console.log(image)
}




//     {
//         Alert.alert("Debes de darle permiso para acceder a las imágenes del teléfono.")
//         return response
//     }
//     const result = await ImagePicker.launchImageLibraryAsync({
//         allowsEditing: true,
//         aspect: array
//     })
//     if (result.cancelled) {
//         return response
//     }
//     response.status = true
//     response.image = result.uri
//     return response
// }
