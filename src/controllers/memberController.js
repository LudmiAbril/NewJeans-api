import Member from "../models/member.js";

export const getAllMembers = async (req, res) => {
    try {
        const members = await Member.findAll();
        res.json(members)
    } catch (error) {
        res.status(505).json({ error: error.message })
    }
}