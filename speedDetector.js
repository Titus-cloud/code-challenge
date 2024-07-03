// my speed detector toy problem
const calculateDemeritPoints = (speed) => 
  {
  let speedLimit = 70;
  let pointsPerExcessSpeed = 5;

  if (speed <= speedLimit)
     {
    console.log('Ok'); 
  }


  const demeritPoints = Math.floor((speed - speedLimit) / pointsPerExcessSpeed);

  // when demerit points are high you are prone to suspention of your d.l
  if (demeritPoints > 12) 
    {
    console.log('License suspended');
  }

  console.log('Demerit points');
};

