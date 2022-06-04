const updateData = async (setloadingFn, getDataFn, setDataFn) => {
  setloadingFn(true);
  try {
    const { data } = await getDataFn();
    setDataFn(data);
    setloadingFn(false);
  } catch (error) {
    console.error(error);
  }
};

export default updateData;
