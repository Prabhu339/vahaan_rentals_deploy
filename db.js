const mongoose=require("mongoose")
const url="mongodb+srv://magapuchinni:1KNYB6KwfiVc2uqL@cluster0.fmy3n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url)
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'))