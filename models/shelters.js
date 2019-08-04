module.exports = function(sequelize,DataTypes){
    var Shelter = sequelize.define("Shelter",{

        Shelter_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false
        },
        gender:{
            type: DataTypes.STRING,
            allowNull: false
        },
        capacity:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        phone_number:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Shelter;
};