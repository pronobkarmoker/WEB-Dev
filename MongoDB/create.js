db.inventory.insertOne({
    item: "canvas",qty: 100 , tags: ["cotton"],size: {h:28 , w:35.5}
})

db.inventory.insertMany([{
    item: "canvas1",qty: 1200 , tags: ["cotton"],size: {h:281 , w:35.54}},
    {item: "canvas2",qty: 1100 , tags: ["cotton"],size: {h:128 , w:345.5}},
    {item: "canvas3",qty: 34100 , tags: ["cotton"],size: {h:928 , w:335.5}},
    {item: "canvas4",qty: 1050 , tags: ["cotton"],size: {h:278 , w:351.5}},
    {item: "canvas5",qty: 1070 , tags: ["cotton"],size: {h:258 , w:325.5}
}])