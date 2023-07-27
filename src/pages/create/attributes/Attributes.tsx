import { Button, Input } from '@gear-js/ui';
import { FieldArrayWithId, UseFormRegister } from 'react-hook-form';
import styles from './Attributes.module.scss';

type Props = {
  register: UseFormRegister<any>;
  fields: FieldArrayWithId[];
  onRemoveButtonClick: (index: number) => void;
};


function Attributes({ register, fields, onRemoveButtonClick }: Props) {
  const getFields = () =>
    fields.map(({ id }, index) => (
      <div key={id} className={styles.field}>
        <div className={styles.moveleft}>
          <Input className={styles.input } disabled {...register(`attributes.${index}.key`, { required: true })} />
          <Input
            className={styles.moveright}
            {...register(`attributes.${index}.value`, { required: true })}
          />
        </div>
      </div>
    ));

  return <div>{getFields()}</div>;
}

export { Attributes };
