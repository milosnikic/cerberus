import { motion } from "framer-motion/dist/framer-motion";

export default function SkeletonTable() {
    return (
        <div
            className="min-w-screen min-h-screen flex justify-center font-sans overflow-hidden">
            <div className="w-full">
                <div
                    className="bg-white shadow-md rounded my-6">
                    <table
                        className="min-w-max w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Firstname</th>
                                <th className="py-3 px-6 text-left">Lastname</th>
                                <th className="py-3 px-6 text-left">Username</th>
                                <th className="py-3 px-6 text-left">Team</th>
                                <th className="py-3 px-6 text-left">Nationality</th>
                                <th className="py-3 px-6 text-center">Age</th>
                                <th className="py-3 px-6 text-left">Roles</th>
                                <th className="py-3 px-6 text-left">Faceit</th>
                                <th className="py-3 px-6 text-left">Twitter</th>
                                <th className="py-3 px-6 text-left">Hltv</th>
                                <th className="py-3 px-6 text-left">Email</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            <motion.tr
                                animate={{
                                    scale: [0.99, 1.01, 0.99, 1.01, 0.99],
                                    opacity: [0.5, 1, 1, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity
                                }}
                                className="border-b border-gray-100">
                                <td className="py-3 px-6 text-center whitespace-nowrap">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                            </motion.tr>
                            <motion.tr
                                animate={{
                                    scale: [0.99, 1.01, 0.99, 1.01, 0.99],
                                    opacity: [0.5, 1, 1, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity
                                }}
                                className="border-b border-gray-100 bg-gray-200">
                                <td className="py-3 px-6 text-center whitespace-nowrap">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                            </motion.tr>
                            <motion.tr
                                animate={{
                                    scale: [0.99, 1.01, 0.99, 1.01, 0.99],
                                    opacity: [0.5, 1, 1, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity
                                }}
                                className="border-b border-gray-100">
                                <td className="py-3 px-6 text-center whitespace-nowrap">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                            </motion.tr>
                            <motion.tr
                                animate={{
                                    scale: [0.99, 1.01, 0.99, 1.01, 0.99],
                                    opacity: [0.5, 1, 1, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity
                                }}
                                className="border-b border-gray-100 bg-gray-200">
                                <td className="py-3 px-6 text-center whitespace-nowrap">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                            </motion.tr>
                            <motion.tr
                                animate={{
                                    scale: [0.99, 1.01, 0.99, 1.01, 0.99],
                                    opacity: [0.5, 1, 1, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity
                                }}
                                className="border-b border-gray-100">
                                <td className="py-3 px-6 text-center whitespace-nowrap">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                            </motion.tr>
                            <motion.tr
                                animate={{
                                    scale: [0.99, 1.01, 0.99, 1.01, 0.99],
                                    opacity: [0.5, 1, 1, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity
                                }}
                                className="border-b border-gray-100 bg-gray-200">
                                <td className="py-3 px-6 text-center whitespace-nowrap">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                            </motion.tr>
                            <motion.tr
                                animate={{
                                    scale: [0.99, 1.01, 0.99, 1.01, 0.99],
                                    opacity: [0.5, 1, 1, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity
                                }}
                                className="border-b border-gray-100">
                                <td className="py-3 px-6 text-center whitespace-nowrap">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                            </motion.tr>
                            <motion.tr
                                animate={{
                                    scale: [0.99, 1.01, 0.99, 1.01, 0.99],
                                    opacity: [0.5, 1, 1, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity
                                }}
                                className="border-b border-gray-100 bg-gray-200">
                                <td className="py-3 px-6 text-center whitespace-nowrap">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                            </motion.tr>
                            <motion.tr
                                animate={{
                                    scale: [0.99, 1.01, 0.99, 1.01, 0.99],
                                    opacity: [0.5, 1, 1, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity
                                }}
                                className="border-b border-gray-100">
                                <td className="py-3 px-6 text-center whitespace-nowrap">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                            </motion.tr>
                            <motion.tr
                                animate={{
                                    scale: [0.99, 1.01, 0.99, 1.01, 0.99],
                                    opacity: [0.5, 1, 1, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity
                                }}
                                className="border-b border-gray-100 bg-gray-200">
                                <td className="py-3 px-6 text-center whitespace-nowrap">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                            </motion.tr>
                            <motion.tr
                                animate={{
                                    scale: [0.99, 1.01, 0.99, 1.01, 0.99],
                                    opacity: [0.5, 1, 1, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity
                                }}
                                className="border-b border-gray-100">
                                <td className="py-3 px-6 text-center whitespace-nowrap">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                            </motion.tr>
                            <motion.tr
                                animate={{
                                    scale: [0.99, 1.01, 0.99, 1.01, 0.99],
                                    opacity: [0.5, 1, 1, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity
                                }}
                                className="border-b border-gray-100 bg-gray-200">
                                <td className="py-3 px-6 text-center whitespace-nowrap">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-50"></div>
                                </td>
                            </motion.tr>
                            <motion.tr
                                animate={{
                                    scale: [0.99, 1.01, 0.99, 1.01, 0.99],
                                    opacity: [0.5, 1, 1, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity
                                }}
                                className="border-b border-gray-100">
                                <td className="py-3 px-6 text-center whitespace-nowrap">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-20 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-3 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex items-center w-12 h-6 rounded-full bg-gray-400 opacity-25"></div>
                                </td>
                            </motion.tr>
                        </tbody >
                    </table>
                </div>
            </div>
        </div>
    )
}
