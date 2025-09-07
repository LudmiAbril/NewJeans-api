import Member from "../models/member.js";

export const getAllMembers = async (req, res) => {
    try {
        const members = await Member.findAll();
        res.json(members)
    } catch (error) {
        res.status(505).json({ error: error.message })
    }
}

export const getMemberById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const member = await Member.findByPk(id);
        if (!member) {
            return res.status(404).json({ error: 'Member not found' });
        }
        res.json(member)
    } catch (error) {
        res.status(505).json({ error: error.message })
    }
}

export const getMemberByName = async (req, res) => {
    try {
        const name = req.query.name.toLowerCase();
        const member = await Member.findOne({ where: { stageName: name }});
        if (!member) {
            return res.status(404).json({ error: 'Member not found' });
        }
        res.json(member)
    } catch (error) {
        res.status(505).json({ error: error.message })
    }
}