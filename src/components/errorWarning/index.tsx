import React from 'react';
import { connect, useDispatch } from 'react-redux';

// actions
import * as actions from '../../controllers/errorHandler/action';

// interfaces
import { IStore } from '../../controllers/storeModel';
import { IError } from '../../controllers/errorHandler/model';

interface IProps {
    errors: IError[]
}

const  ErrorWarning: React.FC<IProps> = (props) =>{
    const dispatch = useDispatch()
  return (
        <div className='error-warning'>
            {props.errors.map(item => {
                return (
                    <div
                        className='error-plate'
                        key={item.id}
                    >
                        <div className='error-plate-txt' >
                            <div className='error-plate-txt_top'>{item.type} !</div>
                            <div className='error-plate-txt_bottom'>{item.msg}</div>
                            <div className='error-plate-txt_bottom'>Please remove warning to continue</div>
                        </div>
                        <div 
                            className='error-plate-cls'
                            onClick={() => {dispatch(actions.removeError(item))}} 
                        >
                            close
                        </div>
                    </div>
                )
            })}
        </div>
  );
}

export default connect((store: IStore) => ({
    errors: store.errors.errors,
  }))(ErrorWarning);
