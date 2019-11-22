const state = {
    //tabimg
    tabdata: {
        imgtab: '',
        imgitems: [],
    },
    searchItem:[
        {
         src: '',
         title: '',
         desc: '',
         more: '',
        }
    ],
    personItem:[
        {
            src: '',
            title: '',
            desc: '',
            order: '',
        }
    ],
    findinspItem:[
        {
            src: '',
            title: '',
            desc: '',
            more: '',   
        }
    ],
    searchByPlace:[
        {
         province: '北京市',
       
            citys:['北京市'],
         
         countys:['朝阳区','东城区','西城区']
          },
          {
            province: '天津市',
            citys:  ['天津市'],
            countys:['南开区','和平区']
          },
          {
            province: '河北省',
            citys:  ['太原市'],
            countys:['小店区']
          },
          {
            province: '吉林省',
            citys:  ['长春市'],
            countys:['朝阳区']
          }

    ]
}
export default state;