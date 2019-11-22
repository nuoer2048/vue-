import Mock from 'mockjs';
let tabdata =  Mock.mock('/tabdata','get',{
    'code': '000',
    'message': 'success',
    'data': {
        'imgtab': '../assets/fa-left.jpg',
        'imgitems': [
            {
                'key': 1,
                'src': require('../assets/one.jpg')
            },
            {
                'key': 2,
                'src': require('../assets/two.jpg')
            },
            {
                'key': 3,
                'src': require('../assets/thr.jpg')
            },
            {
                'key': 4,
                'src': require('../assets/bar-four.jpg')
            },
            {
                'key': 5,
                'src': require('../assets/bar-one.jpg')
            },
            {
                'key': 6,
                'src': require('../assets/bar-thr.jpg')
            },
            {
                'key': 7,
                'src': require('../assets/bar-two.jpg')
            },
        ]

    }
})
let searchItem = Mock.mock('/getSearchImg','get',Mock.mock({
    'code': '000',
    'message':'success',
    'data':[
        {
            'src': require('../assets/search-one.jpg'),
            'title': '彩妆',
            'desc':'@paragraph(1)',
            'more': '了解更多',
        },
        {
            'src': require('../assets/seach-two.jpg'),
            'title': '礼盒',
            'desc':'@paragraph(1)',
            'more': '了解更多',
        },
        {
            'src': require('../assets/search-thr.jpg'),
            'title': '香水',
            'desc':'@paragraph(1)',
            'more': '了解更多',
        },
        {
            'src': require('../assets/search-four.jpg'),
            'title': '护肤',
            'desc':'@paragraph(1)',
            'more': '了解更多',
        },
    ]
}))
let personorderItem = Mock.mock('/personorderitem','get',Mock.mock({
    'code':'000',
     'message':'success',
      'data':[
        {
            'src': require('../assets/search-one.jpg'),
            'title': '私人定制',
            'desc':'@paragraph(1)',
            'order': '礼品定制',
        },
        {
            'src': require('../assets/search-one.jpg'),
            'title': '私人定制',
            'desc':'@paragraph(1)',
            'order': '礼品定制',
        }
      ]
}))
let findinspItem = Mock.mock('/findinspitem', 'get', Mock.mock({
    'code':'000',
    'message':'success',
    'data':[{
        'src': require('../assets/findInsp-one.jpg'),
        'title': '潮流杂志',
        'desc':'@paragraph(1)',
        'more': '阅读全文',
    },
    {
        'src': require('../assets/findInsp-two.jpg'),
        'title': '潮流杂志',
        'desc':'@paragraph(1)',
        'more': '阅读全文',
    },
    {
        'src': require('../assets/findInsp-thr.jpg'),
        'title': '潮流杂志',
        'desc':'@paragraph(1)',
        'more': '阅读全文',
    },
]
}))
export default{
    tabdata,
    searchItem,
    personorderItem,
    findinspItem
}
