import React from 'react'
import {View, SafeAreaView, Text, Button} from 'react-native'

function Home() {
     return (
          <SafeAreaView>
               <View>
                    <Text>Kapalzy</Text>
                    <View>
                    <Input placeholder="Pilih Pelabuhan awal"></Input>
               </View>
               <View>
                    <Input placeholder="Pilih Pelabuhan tujuan"></Input>
               </View>
               <View>
                    <Input placeholder="Pilih Layanan"></Input>
               </View>
               <View>
                    <Input placeholder="Pilih Tanggal Masuk"></Input>
               </View>
               <View>
                    <Input placeholder="Pilih Jam Masuk"></Input>
               </View>
               <View>
                    <Text>Dewasa</Text>
                    <Text>1</Text>
               </View>
               <View>
                    <Button title="Buat Tiket"></Button>
               </View>
               </View>
          </SafeAreaView>
     );
}

export default Home
