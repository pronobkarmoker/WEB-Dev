// desc get all contacts 
// @route GET /api/contacts
// @access Public
                                                                            
const getContacts = (req, res) => {
    res.status(200).json({ message: `get contacts` });
};

// desc create all contacts 
// @route POST /api/contacts
// @access Public
                                                                            
const createContact = (req, res) => {
    console.log(req.body);
    res.status(201).json({ message: `create contacts` });
};

// desc get single contacts
// @route GET /api/contacts/:id
// @access Public

const getContact = (req, res) => {
    res.status(200).json({ message: `get contacts for ${req.params.id}` });
};


// desc updatecontacts
// @route delete /api/contacts
// @access Public
const updateContact =(req, res) => {
    res.status(200).json({ message: `update contacts for ${req.params.id}` });
};

// desc delete all contacts 
// @route delete /api/contacts/:1d
// @access Public
                                                                            
const deleteContact =(req, res) => {
    res.status(200).json({ message: `delete contacts for ${req.params.id}` });
};



module.exports = {getContacts, createContact,getContact, updateContact, deleteContact};