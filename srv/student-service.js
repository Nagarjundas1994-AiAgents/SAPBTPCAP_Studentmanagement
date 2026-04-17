module.exports = srv => {
    srv.on('approveStudent', 'Students', async (req) => {
        const studentId = req.params[0].ID; // Get the ID of the bound student
        
        // Update the status to 'Approved'
        await UPDATE('Students')
            .set({ status: 'Approved' })
            .where({ ID: studentId });

        return { message: "Student approved successfully" };
    });
};