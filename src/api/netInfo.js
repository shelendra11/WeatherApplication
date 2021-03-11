import NetInfo from "@react-native-community/netinfo";
export function fetchNetInfo(){
    return NetInfo.fetch().then(state => ({status:state.isConnected}))
}