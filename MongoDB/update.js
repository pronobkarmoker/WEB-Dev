db.inventory.updateOne({
    item: "canvas"},{
        $set: { tags: "p"},
        $currentDate : {lastModified: true}
})