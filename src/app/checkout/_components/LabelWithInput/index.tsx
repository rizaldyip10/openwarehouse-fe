import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface LabelWithInputProps {
  label: string;
  placeholder: string;
  type?: string;
  isRequired?: boolean;
  isSelectOption?: boolean;
  selectContent?: string[];
}

export default function LabelWithInput(props: LabelWithInputProps) {
  const {
    label,
    placeholder,
    type,
    isRequired,
    isSelectOption,
    selectContent,
  } = props;
  return (
    <div className='flex flex-col gap-2'>
      <Label>
        {label}
        {isRequired && <span className='text-red-500'> *</span>}
      </Label>
      {!isSelectOption ? (
        <Input type={type} placeholder={placeholder} />
      ) : (
        <Select>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {selectContent?.map((item) => (
              <SelectItem value={item}>{item}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
}
