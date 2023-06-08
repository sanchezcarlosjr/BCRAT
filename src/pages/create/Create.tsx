import { Button, Checkbox, FileInput, Input, Textarea } from '@gear-js/ui';
import plus from 'assets/images/form/plus.svg';
import { useIPFS, useNftMessage } from 'hooks';
import { getMintDetails, getMintPayload } from 'utils';
import { useForm, useFieldArray } from 'react-hook-form';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';
import { Attributes } from './attributes';
import styles from './Create.module.scss';


type AttributesValue = { key: string; value: string };
type Values = { name: string; description: string; image: FileList; attributes: AttributesValue[]; rarity: string };

const id = uuidv4().toString();
const defaultAttributes = [{ key: 'Age', value: '-1' }, { key: 'Relative with this disease', value: '' }, { key: 'Age when had your first son', value: '-1' }, { key: 'Age when had menopuase', value: '-1' }, { key: 'How many sons', value: '-1' }];
const defaultValues = { name: id, description: 'I am a beloving mother and want to keep this diagnosis as anonymous as possible.', attributes: defaultAttributes, rarity: '' };

const IMAGE_FILE_TYPES = ['image/png', 'image/gif', 'image/jpeg'];

const validateImage = {
  required: (files: FileList) => !!files.length || 'Attach image',
  size: (files: FileList) => files[0].size / 1024 ** 2 < 10 || 'Image size should not exceed 10MB',
  extension: (files: FileList) => IMAGE_FILE_TYPES.includes(files[0].type) || 'Image should be .jpg, .png or .gif',
};

function Create() {
  const { formState, control, register, handleSubmit, resetField, reset } = useForm<Values>({ defaultValues });
  const { fields, append, remove } = useFieldArray({ control, name: 'attributes' });
  const { errors } = formState;

  const ipfs = useIPFS();
  const sendMessage = useNftMessage();

  const [isAnyAttribute, setIsAnyAttribute] = useState(false);
  const [isRarity, setIsRarity] = useState(false);

  const toggleAttributes = () => setIsAnyAttribute((prevValue) => !prevValue);
  const toggleRarity = () => setIsRarity((prevValue) => !prevValue);

  useEffect(() => {
    resetField('attributes');
  }, [isAnyAttribute, resetField]);

  useEffect(() => {
    resetField('rarity');
  }, [isRarity, resetField]);

  const triggerImageChange = () => {
    // hacky fix cuz reset() doesn't trigger file input's onChange
    const changeEvent = new Event('change', { bubbles: true });
    document.querySelector('[name="image"]')?.dispatchEvent(changeEvent);
  };

  const resetForm = () => {
    reset();
    triggerImageChange();
    setIsAnyAttribute(false);
    setIsRarity(false);
  };

  const onSubmit = async (data: Values) => {
    const { name, description, attributes, rarity } = data;
    const image = data.image[0];

    const details = isAnyAttribute || isRarity ? getMintDetails(isAnyAttribute ? attributes : undefined, rarity) : '';

    ipfs
      .add(image)
      .then(({ cid }) => cid)
      .then(async (imageCid) => (details ? { detailsCid: (await ipfs.add(details)).cid, imageCid } : { imageCid }))
      .then(({ imageCid, detailsCid }) => getMintPayload(name, description, imageCid, detailsCid))
      .then((payload) => sendMessage(payload, { onSuccess: resetForm }));
  };

  return (
    <>
      <h2 className={styles.heading}>Create NFT</h2>
      <div className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.item}>
            <Input label="Medical record name:" className={styles.input} {...register('name', { required: 'Name is required' })} />
            <p className={styles.error}>{errors.name?.message}</p>
          </div>

          <div className={styles.item}>
            <Textarea
              label="Tell us about you:"
              className={styles.input}
              {...register('description', { required: 'Description is required' })}
            />
            <p className={styles.error}>{errors.description?.message}</p>
          </div>

          <div className={clsx(styles.input, styles.checkboxWrapper)}>
            <div className={styles.item}>
              <Checkbox label="By checking this box you accept to contribute with your data to the improvement of the national health care system" checked={isAnyAttribute} onChange={toggleAttributes} />
              <p className={clsx(styles.error, styles.checkboxError)}>
                {(errors.attributes?.[0]?.key || errors.attributes?.[0]?.value) && 'Enter attributes'}
              </p>
            </div>
          </div>
          {isAnyAttribute && <Attributes register={register} fields={fields} onRemoveButtonClick={remove} />}
          {isRarity && (
            <div className={styles.item}>
              <Input label="Rarity" className={styles.input} {...register('rarity', { required: 'Enter rarity' })} />
            </div>
          )}

          <div className={styles.item}>
            <FileInput
              label="Mammography file:"
              className={styles.input}
              accept={IMAGE_FILE_TYPES.join(', ')}
              {...register('image', { validate: validateImage })}
            />
            <p className={styles.error}>{errors.image?.message}</p>
          </div>
          <Button type="submit" text="Create" className={styles.button} block />
        </form>
      </div>
    </>
  );
}

export { Create };