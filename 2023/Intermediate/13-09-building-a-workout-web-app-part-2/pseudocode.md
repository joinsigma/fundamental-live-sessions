## Final Pseudocode
- If streak is broken, then reset today as first day, and reset checkpoint at 12am tmrw
- Only after the checked condition = true, then and only then, the lastCheckedIn will be updated with today's time
- `Update:` Only after the checked condition = true, then and only then, carry out all the streak checking code

### Data Type
```js
let user = {
    streak:{
        isChecked:false,
        resetTime:[2,0,0],
        nextCheckpointDate:"Sat Mar 14 2023 00:00:00 GMT+0800 (Malaysia Time)",
        lastCheckedIn:"Sat Mar 11 2023 14:51:15 GMT+0800 (Malaysia Time)",
        currentStreak:11,
        highestStreak:7,
        records:[2,7,4,5]
    }
}
```

---

`If streak broken`
- reset first day to new log in date
- reset current streak to 0
- check if current streak > highest streak record
     - update highest streak record with current streak score if TRUE   

- checkpoint date = new log in date + 1 day
- update isChecked status to TRUE
- increment current streak by 1

`else`
- checkpoint date = new log in date + 1 day
- update isChecked status to TRUE
- increment current streak by 1

## Conditions and scenarios
`If user first time log in`
- same process as `streak broken`

`Streak broken if`
- today's log in > checkpoint date

