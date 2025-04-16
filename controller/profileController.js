import User from '../models/Users.js';

export const getUserProfile = async (req, res) => {
    try {
        console.log(req.user);
        const user = await User.findById(req.user.id).select('-password')
        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password')
        if (!users) {
            return res.status(404).json({ message: "user not found" });
        }
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id).select('-password');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}
